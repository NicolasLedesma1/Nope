import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">{category}</p>
        <p className="info">{description}</p>
        <p className="info">precio: $ {price}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          inicial={1}
          stock={10}
          onAdd={(cantidad) => console.log("cantidad agregada ", cantidad)}
        />
      </footer>
    </article>
  );
};
export default ItemDetail
