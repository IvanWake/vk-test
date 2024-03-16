type Props = {
    content: string,
    disabled: boolean | undefined
}

const Button = ({ content, disabled }: Props) => {
    return (
        <button
            className="cursor-pointer rounded-[1rem]
            bg-[#50A1FF] text-white px-[7.5rem] py-[1rem] font-semibold text-xl text-center disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={disabled}
        >
            {content}
        </button>
    );
}

export default Button;