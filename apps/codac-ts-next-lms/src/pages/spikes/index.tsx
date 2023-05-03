import {useGetSpikesQuery} from "codac-administration"
import { useState, useEffect } from "react";
import Layout from "../../components/layout"
import Link from "next/link";

export default function Spikes() {

    const { data, loading, error } = useGetSpikesQuery();

    const allSpikes = data?.spikes?.data

    console.log('allSpikes', allSpikes)
  
  return (
    <Layout>
      <div className="flex flex-col overflow-y-auto px-1 py-7 ">
        <h4 className=" my-2 bg-zinc-800 p-3 font-bold text-[#009688] shadow-xl">
          Spikes
        </h4>
        <div>
          {!allSpikes
            ? loading
            : allSpikes?.map((spike, i) => {
                return (
                  <div
                    className="my-2 w-[75vw] bg-zinc-800 p-3 text-[#009688] shadow-xl pb-5"
                    key={i}
                  >
                    <p>
                      <strong>Subject of the spike:</strong> &emsp;{" "}
                      {spike?.attributes?.title}
                    </p>
                    <p>
                      <strong>Day:</strong>
                      &emsp;
                      {spike?.attributes?.day}
                    </p>
                    <Link
                      className="float-right font-bold underline hover:decoration-double inline-block"
                      href={`spikes/${spike?.id}`}
                    >
                      Spike page {">>"}
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </Layout>
  );
}