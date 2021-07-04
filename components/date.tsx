import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>
            {format(date, "dd 'de' LLLL 'de' yyyy", {locale: pt})}
        </time>
    );
}