import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Products.module.css';

const productsData = [
    { id: 1, name: 'Bicos Automáticos', category: 'Equipamentos', description: 'Alta vazão e segurança para abastecimento.' },
    { id: 2, name: 'Bombas de Transferência', category: 'Equipamentos', description: 'Eficiência no manuseio de fluídos.' },
    { id: 3, name: 'Bombas de Drenagem', category: 'Equipamentos', description: 'Soluções robustas para drenagem industrial.' },
    { id: 4, name: 'Válvulas Breakaway', category: 'Acessórios', description: 'Segurança contra quebra de mangueiras.' },
    { id: 5, name: 'Papel Linter', category: 'Papéis Especiais', description: 'Para pastilhas de inseticidas elétricos.' },
    { id: 6, name: 'Papelão para Filtros', category: 'Papéis Especiais', description: 'Material filtrante de alta densidade.' },
    { id: 7, name: 'Bobinas de Velumoid', category: 'Papéis Especiais', description: 'Guarnições para vedação (bomba de gasolina/óleo/água).' },
    { id: 8, name: 'Mangueiras', category: 'Acessórios', description: 'Diversas medidas para postos de combustível.' },
];

const categories = ['Todos', 'Equipamentos', 'Papéis Especiais', 'Acessórios'];

const Products = () => {
    const [filter, setFilter] = useState('Todos');

    const filteredProducts = productsData.filter(p =>
        filter === 'Todos' ? true : p.category === filter
    );

    return (
        <div className={styles.pageContainer}>
            <div className={`container ${styles.content}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.header}
                >
                    <h1>Nossos Produtos</h1>
                    <p>Catálogo completo de soluções industriais.</p>
                </motion.div>

                <div className={styles.filters}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className={styles.grid}
                >
                    <AnimatePresence>
                        {filteredProducts.map(product => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={styles.card}
                            >
                                <div className={styles.cardImageStub}></div>
                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{product.category}</span>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <button className={styles.detailsBtn}>Detalhes</button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Products;
