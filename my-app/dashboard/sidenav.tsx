import Link from "next/dist/client/link";

export default function SideNav(){
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/dashboard/customers">Customers</Link>
                </li>
            </ul>
        </nav>
    );
}