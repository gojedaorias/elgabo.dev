import Icon from "@/components/Icon";
import cn from "classnames";
import styles from "./overview.module.css";

interface OverviewProps {
  product: {
    overview: string;
    features: Array<{
      title: string;
    }>;
    extras: Array<{
      title: string;
    }>;
    price: number;
  };
}

const Overview = ({ product }: OverviewProps) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={cn("body-2-semibold", styles.title)}>Overview</div>
        <div className={cn("caption", styles.description)}>
          {product.overview}
        </div>
      </div>

      <div className={styles.breakline} />

      <div className={styles.features}>
        <div className={cn("body-2-semibold", styles.text)}>Key features:</div>

        {product.features.map((feature) => (
          <div
            key={crypto.randomUUID()}
            className={cn("caption", styles.feature)}
          >
            <Icon name="check-bold" size={18} /> {feature.title}
          </div>
        ))}
      </div>

      <div className={styles.breakline} />

      <div className={styles.features}>
        <div className={cn("body-2-semibold", styles.text)}>
          Template includes:
        </div>

        {product.extras.map((extra) => (
          <div
            key={crypto.randomUUID()}
            className={cn("caption", styles.feature)}
          >
            <Icon name="check-bold" size={18} /> {extra.title}
          </div>
        ))}
      </div>

      <div className={styles.buttons}>
        <button className={cn("button-stroke", styles.button)}>
          Live demo
        </button>

        <button className={cn("button")}>Buy Now - ${product.price}</button>
      </div>
    </div>
  );
};

export default Overview;
