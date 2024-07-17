/* eslint-disable react/prop-types */
const TableCell = ({children}) => {
    return (
        <td className="border-b border-slate-100 dark:border-slate-700 p-1 text-slate-500 dark:text-slate-400 pt-4 pl-2">
            {children}
        </td>
    )
}

export default TableCell