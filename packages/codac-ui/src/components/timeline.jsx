import Link from "next/link";
export const Timeline = ({ color = "default", items, }) => {
    // const borderClass = `border-codac-${color}`;
    return (<div className="mt-3">
      {/* <h3 className="mb-6 ml-3 text-2xl font-bold text-gray-700">Timeline</h3> */}

      <ol>
        {items.map((item) => {
            return (<li key={item.title} className={`border-codac-${color} border-l-2`}>
              <div className="flex-start md:flex">
                <div className={`-ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-codac-${color}`}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="h-3 w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="mb-10 ml-6 block max-w-md rounded-lg bg-gray-100 p-6 shadow-lg">
                  <div className="mb-4 flex justify-between">
                    <Link href={item.href} className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800">
                      {item.title}
                    </Link>
                    <p className="text-sm font-medium text-purple-600 transition duration-300 ease-in-out hover:text-purple-700 focus:text-purple-800">
                      {item.date}
                    </p>
                  </div>
                  <p className="mb-6 text-gray-700">{item.description}</p>
                </div>
              </div>
            </li>);
        })}
      </ol>
    </div>);
};
