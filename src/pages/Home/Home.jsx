import React from 'react'
import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'

const Home = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch("data/data.json");
        const data = await response.json();
        setData(data);
    }
    return (
        <>
            <Header />
            <div className={styles.home__container}>
                {data.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            img={item.image}
                            title={item.title}
                            url={item.url}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default Home