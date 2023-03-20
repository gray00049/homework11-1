import { useSelector } from 'react-redux';

export default function FactsList() {
  const facts = [
    'Прообразом Чубакки стал пес режиссера',
    'Актерам разрешили подобрать любимый цвет для своих цветовых мечей',
    'В фильме "Звездные войны - 5: Империя наносит ответный удар" среди космических объектов можно заметить парящий ботинок и картофелину',
    'Дыхание Дарта Вейдера - это звуки Дыхательной маски, подключенной к аквалангу',
    'Планета Татуин названа в честь реального города в Тунисе - стране, где происходила часть съемок'
  ];

  const factsCount = useSelector(state => state.factsCount);

  return (
    <ol className="list-group list-group-flush list-group-numbered mt-3">
      {facts.slice(0, factsCount).map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>
      ))}
    </ol>
  )
}