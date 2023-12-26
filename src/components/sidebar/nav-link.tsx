import { FC } from "react"
import { Link, useLocation } from "react-router-dom"

interface Props {
    href: string
    label: string
}


const NavLink: FC<Props> = ({ href, label }) => {
    const { pathname } = useLocation()

    return (
        <Link
            to={href}
            className={`${pathname === href && ''}`}
        >

            <span className={`${pathname === href && '#FFFFFF'}`}>
                {label}
            </span>
        </Link>
    )

}


export default NavLink