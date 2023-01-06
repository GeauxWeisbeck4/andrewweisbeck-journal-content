export default function PageTitle({ children }) {
  return (
    <h1 className="border-4 border-solid border-gray-900 bg-teal-300 px-2 py-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 shadow-lg shadow-teal-700 dark:border-gray-100 dark:bg-teal-700 dark:text-gray-100 dark:shadow-teal-300 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
