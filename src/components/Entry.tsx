import React from 'react';
import styles from './Entry.module.css';

interface Props {
    date: Date | string,
    title: string,
    summary?: string,
    children: React.ReactNode,
}

const Entry = ({ date, title, summary, children }: Props) => {

    const date_ = new Date(date);
    let locale;
    try {
        locale = navigator.languages[0]
    } catch {
        locale = "en-US";
    }
    let dateFormatted = date_.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
    if (dateFormatted === 'Invalid Date' && typeof (date) === 'string') {
        dateFormatted = date;
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.date}>{dateFormatted}</h3>
            </div>
            {summary && <div className={styles.summary}>
                <div>{summary}</div>
            </div>}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Entry;