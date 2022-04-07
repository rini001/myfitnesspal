import card from '../Home/card.module.css'

const Card = ({image, ctext}) => {
    return(
        <div className={card.box}>
            <img src={image} alt="" />
            <h3>{ctext}</h3>
            <p><a href="#">MyFitness Blog</a></p>
        </div>
    )
}

export {Card}