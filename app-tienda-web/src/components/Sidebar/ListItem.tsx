import { Link } from 'react-router-dom';

interface ListItemProps {
  icon: string;
  text: string;
  link: string;
}
export default function ListItem({ icon, text, link }: ListItemProps) {
  return (
    <Link to={link}>
      <li className='font-semibold p-2 hover:translate-x-1  hover:bg-slate-400 hover:shadow-2xl transition-all cursor-pointer rounded-md'>
        <span className='material-icons font-semibold align-middle pb-1 px-1'>
          {icon}
        </span>
        {text}
      </li>
    </Link>
  );
}
