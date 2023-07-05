// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";

// export interface AvatarCardProps {
//   image?: string | StaticImageData;
//   href?: string;
//   title?: string;
// }

// export const AvatarCard = ({ image, href = "", title = "" }: AvatarCardProps
// ) => {
//   return (
//     <Link href={href} className="">
//       <section className="card-list flex">
//         <article className="card bg-dark rounded-xl shadow-lg transition duration-200">
//           <header className="card-header"></header>

//           <div className="card-content m-6 flex items-center ">
//             {image && (
//               <Image
//                 src={image}
//                 width={180}
//                 height={220}
//                 className="h-full rounded-xl backdrop-invert group-hover:opacity-80"
//                 alt={title}
//               />
//             )}
//           </div>
//         </article>
//       </section>
//     </Link>
//   );
// };
