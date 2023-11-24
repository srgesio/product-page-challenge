

import styles from './AddButton.module.css'

interface AddButtonProps {
    children: React.ReactNode
}

export function AddButton({ children }: AddButtonProps) {

    return (
        <button type='submit' className={`${styles.addButton}`}
        >
            {children}
        </button>

    )
}



