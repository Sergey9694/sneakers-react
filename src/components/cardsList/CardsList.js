import CardItem from '../cardItem/CardItem';

import heart from '../../resources/img/heart.svg';
import heart_red from '../../resources/img/heart_red.svg';

import styles from './cardsList.module.scss';

const CardsList = ({arr}) => {

        const cards = arr.map(card => {
           return (
            <CardItem {...card}/>
           )
        });

    return (
        <div className={styles.wrapper}>
            {cards}
        </div>
    )
}

export default CardsList;