import {useState} from 'react'
//import catImg from '../../img/cat.jpg'
import styles from './item.module.css'

const Item = (props) => {
    const [clicked, setClicked] = useState(false);
    const availableStyle = props.foodInformation.available ? "" : styles.notAvailable;

    const onClickHandler = () => {
        setClicked(prev => {return !prev})
    }
    const onClickHandlerBuy = () => {
        setClicked(false)
        
    }
    return <li className={`${props.foodInformation.available ? styles.available:''} ${clicked && props.foodInformation.available ? styles.clicked: ""}`}
             onClick={onClickHandler}>
        <div className={`${styles.item} ${availableStyle}`}>
            <div className={styles.insideItem}>
                <div className={styles.content}>
                    <div className={styles.head}>{props.title}</div>
                    <div className={styles.name}>{props.foodInformation.name}</div>
                    <div className={styles.taste}>{props.foodInformation.with}</div>
                    <div className={styles.extraInf}>{props.foodInformation.portions+ " порций"}</div>
                    <div className={styles.extraInf}>{props.foodInformation.mouse+" mouses"}</div>
                </div>
                <div className={styles.weight}>
                    <span className={styles.weightNumber}>{props.foodInformation.weight}</span>
                    <span className={styles.kg}>кг</span>
                </div>
                <img src="https://media.istockphoto.com/photos/gray-cat-sitting-picture-id480170658" className={styles.catImg}/>
            </div>
        </div>
        <div className={styles.underText}>
            <p>Чего сидишь? Порадуй котика,<button className={styles.add} onClick={onClickHandlerBuy}>купи</button></p>
        </div>
    </li>
}

export default Item;