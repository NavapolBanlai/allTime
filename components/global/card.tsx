import { useRouter } from 'next/router';
import React from "react";
import Image from './image'
interface PropsTyep {
      title: string,
      description: string,
      img?: string,
      url?: string
      classText?: string
      classImg?: string
      classCard?: string

}

export default function Card(props: PropsTyep) {
      const { title, description, img, url, classText, classImg, classCard } = props;
      const router = useRouter();
      const opts = () => {
            if (url) {
                  router.push('./profile')
            }
      }
      return (
            <>

                  <div className={`card ${classCard ? classCard : ""}`} onClick={opts}>
                        <h5 className="card-title text-center">{title}</h5>
                        {img &&
                              <div className="card-img">
                                    <img className={`card-img-top ${classImg ? classImg : ""}`} src={img} alt="Card image cap" />
                              </div>
                        }
                        <div className="card-body">
                              <p className={`card-text ${classText ? classText : ""}`} > {description}</p>
                        </div>
                  </div>
            </>
      )
}