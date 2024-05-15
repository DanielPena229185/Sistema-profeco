import { Comment } from '../../types';
import Title from '../styleComponents/Title/Title';

const comments: Comment[] = [
  { date: '2024-01-01', rating: 4, comment: 'Great product!' },
  { date: '2024-01-02', rating: 5, comment: 'Excellent service!' },
  { date: '2024-01-03', rating: 3, comment: 'Could be better.' },
];

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  function renderStars() {
    let stars = [];
    for (let index = 0; index < rating; index++) {
      stars.push(
        <span key={index} className='material-icons'>
          star
        </span>
      );
    }
    if (stars.length < 5) {
      for (let index = rating; index < 5; index++) {
        stars.push(
          <span key={index} className='material-icons'>
            star_border
          </span>
        );
      }
    }
    return stars;
  }

  return <div>{renderStars()}</div>;
}

export default function Comments() {
  return (
    <div className='flex flex-col gap-2 p-3'>
      <Title>Mis comentarios y calificaciones</Title>

      {comments?.length ? (
        comments.map((comment, index) => (
          <div key={index} className='border-2 p-2 rounded-md'>
            <div className='flex gap-3'>
              <p>{comment.date}</p>
              <Rating rating={comment.rating} />
            </div>
            <p>{comment.comment}</p>
          </div>
        ))
      ) : (
        <div>No hay comentarios para mostrar...</div>
      )}
    </div>
  );
}
