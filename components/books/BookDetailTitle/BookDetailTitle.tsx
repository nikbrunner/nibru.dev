import Style from "./BookDetailTitle.style";

interface IProps {
  coverImageUrl: string;
  title: string;
  author: string;
}

export const BookDetailTitle: React.FC<IProps> = ({
  coverImageUrl,
  title,
  author
}): JSX.Element => (
  <Style>
    <div className="image">
      <img src={coverImageUrl} alt={`Cover for ${title}`} />
    </div>

    <div className="meta">
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
    </div>
  </Style>
);
