import { useEffect, useState } from "react";
import RaitingProps from "./Raiting.props";
import Star from './Star.svg';
import styles from './Raiting.module.css';
import cn from "classnames";
import React from "react";

export const Raiting = ({ raiting, isEditable = true, setRaiting, ...props  }: RaitingProps): JSX.Element => {

    const [displayRaiting, setDisplayRaiting] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      constructDisplayRaiting(raiting);
    }, [raiting]);

    const constructDisplayRaiting = (displayR: number) => {
      const raitingStars: JSX.Element[] =  displayRaiting.map((star, index) => {
        return (
          <>
            <span 
            key={index} 
            onMouseEnter={() => onMouseEnter(index + 1)}
            onMouseLeave={() => onMouseLeave()}
            >
            <Star className={cn(styles.star, {
              [styles.filled]: index < displayR,
              [styles.noneditable]: !isEditable
            })} 
            key={index}
            onClick={() => isEditable && onClick(index)}

          />
        </span>
        </>);
      });

      setDisplayRaiting(raitingStars);
    };

    const onClick = (clickIndex: number) => {
      if (isEditable && setRaiting) {
        setRaiting(clickIndex + 1);
      }
    };

    const onMouseEnter = (hoverIndex: number) => {
      if (!isEditable) {
        return;
      }
      
      constructDisplayRaiting(hoverIndex);
    };

    const onMouseLeave = () => {
      if (!isEditable) {
        return;
      }

      constructDisplayRaiting(raiting);
    };

    return (
      <>
        <div {...props}>
          { displayRaiting.map((star, index) => <React.Fragment key={index}>{ star }</React.Fragment>)}
        </div>
      </>
    );


};