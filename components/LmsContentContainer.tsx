import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Link from 'next/link'
import styles from '../styles/LmsContentContainer.module.css';
import { ContentCopy } from 'mdi-material-ui';

function LmsContentContainer({ content, next, prev }: { content: string, next?: string, prev?: string }) {

  function addCopyButtons() {
    const codeTags = document.getElementsByTagName("code");
    for (let i = 0; i < codeTags.length; i++) {
      let buttonExists = false;
      for (let j = 0; j < codeTags[i].childNodes.length; j++) {
        if (codeTags[i].childNodes[j].nodeName === "BUTTON") {
          buttonExists = true;
          break;
        }
      }
      if (!buttonExists) {
        const copyButton = document.createElement("button");
        copyButton.classList.add(styles.copyButton);
        copyButton.innerHTML = "Copy";
        copyButton.setAttribute('title', "Copy snippet");
        copyButton.addEventListener("click", () => copyToClipboard(codeTags[i].firstChild?.textContent));
        codeTags[i].insertBefore(copyButton, codeTags[i].childNodes[0]);
      }
    }
    const buttons = document.getElementsByTagName("button");
    console.log(buttons);
  }

  useEffect(() => {
    addCopyButtons();
  }, [])

  async function copyToClipboard (toCopy: string | null | undefined) {
    if (toCopy && toCopy !== undefined) {
      try {
        await navigator.clipboard.writeText(toCopy);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }

  return (
    <>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />

      <div style={{ padding: 5, width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {prev &&
          <Button component={Link} variant='contained' sx={{ px: 5.5 }} href={prev}>
            Previous
          </Button>
        }
        {next &&
          <Button component={Link} variant='contained' sx={{ px: 5.5 }} href={next}>
            Next
          </Button>
        }
      </div>
    </>
    
  )
}

export default LmsContentContainer