import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useAddCommentMutation } from 'cabServer/mutations/__generated__/addCommentLMSPages';
import { useUpdateLmsFeedbackCommentMutation } from 'cabServer/mutations/__generated__/updateCommentLMSPages';
import { useGetLmsFeedbacksQuery } from 'cabServer/queries/__generated__/lmsComments';
import React, { MouseEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type LMSfeedbackProps = {
  slug: string;
};

const CommentsParent = ({ slug }: LMSfeedbackProps) => {
  // fetching existing comments
  const { data, loading, error, refetch } = useGetLmsFeedbacksQuery({
    variables: {
      slug: slug,
    },
  });
  const lmsFeedback = data?.lmsFeedbacks?.data[0];
  // console.log('comments', lmsFeedback);

  // create first comment for a page
  const [createComment, { data: mutationData, error: mutationError }] =
    useAddCommentMutation();

  // add comments to a page
  const [updateComments, { data: updateData, error: updateError }] =
    useUpdateLmsFeedbackCommentMutation();

  const [message, setMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setMessage(event.target.value);

  const handleCancel = () => {
    setMessage('');
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // CASE  1: if feedback for slug/id && commentId exists then updateComment:
    if (lmsFeedback?.id) {
      try {
        const id = lmsFeedback.id;
        const { data } = await createComment({
          variables: {
            lmsFeedbackId: id,
            comment: message,
          },
        });
        //   const result = await res.json();
        console.log('data', data);
        if (data) {
          const response = data.addLMSfeedbackComment;

          if (response?.success) {
            console.log('response', response);

            toast.success(response?.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            refetch();
          }
        }
      } catch (e: any) {
        toast.error(e.errors[0].message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  // refetch comments
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lmsFeedback]);
  console.log('feedback', lmsFeedback);

  return (
    <>
      <Box
        sx={{
          p: 5,
          // display: 'flex',
          width: '50%',
        }}
      >
        <Typography variant="h5">Comments</Typography>
      </Box>
      <Box
        sx={{
          p: 5,
          // display: 'flex',
          width: '50%',
        }}
        component="form"
      >
        <Typography>Leave a comment</Typography>
        <TextField
          autoFocus
          multiline
          rows={6}
          margin="dense"
          id="comment"
          label="Your comment"
          type="text"
          fullWidth
          variant="filled"
          value={message}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mt: 3, ml: 1 }} onClick={handleCancel} type="submit">
            Cancel
          </Button>
          <Button
            // onClick={() => handleSubmit()}
            onClick={handleSubmit}
            sx={{ mt: 3, ml: 1 }}
            type="submit"
            variant="contained"
          >
            Send
          </Button>
        </Box>
      </Box>
      <>
        {lmsFeedback &&
          lmsFeedback.attributes?.comments?.map((comment) => (
            <Box
              sx={{
                p: 5,
                // display: 'flex',
                width: '50%',
              }}
              key={comment?.id}
            >
              <Paper style={{ padding: '40px 20px' }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    {comment?.author?.data ? (
                      <Avatar
                        alt={comment?.author?.data?.attributes?.username}
                        src={
                          comment?.author?.data?.attributes?.avatar?.data
                            ?.attributes?.url
                        }
                      />
                    ) : (
                      <Avatar></Avatar>
                    )}
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    {comment?.author?.data ? (
                      <h4 style={{ margin: 0, textAlign: 'left' }}>
                        {comment?.author?.data?.attributes?.username}
                      </h4>
                    ) : (
                      <h4 style={{ margin: 0, textAlign: 'left' }}>
                        {'anonymous user'}
                      </h4>
                    )}

                    <p style={{ textAlign: 'left' }}>
                      {lmsFeedback.attributes?.comments?.map(
                        (comment) => comment?.message,
                      )}
                    </p>
                    <p style={{ textAlign: 'left', color: 'gray' }}>
                      {lmsFeedback.attributes?.comments?.map((comment) =>
                        new Date(comment?.timestamp).toDateString(),
                      )}
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          ))}
        {/* <Divider variant="fullWidth" style={{ margin: '30px 0' }} /> */}
      </>
    </>
  );
};

export default CommentsParent;
