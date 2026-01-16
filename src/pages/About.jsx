import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.intro}
                >
                    <h1>Nossa História</h1>
                    <p>Há mais de 15 anos oferecendo soluções com excelência e qualidade.</p>
                </motion.div>

                <section className={styles.history}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.sectionTitle}>Quem Somos</h2>
                        <div className={styles.historyContent}>
                            <p>
                                A <strong>TRN Papéis</strong> está presente no mercado desde 2007, consolidando-se como referência
                                na fabricação e distribuição de equipamentos e acessórios para postos de serviços e combustíveis.
                            </p>
                            <br />
                            <p>
                                Com fabricação própria e um rigoroso controle de qualidade, garantimos produtos que atendem às
                                mais altas exigências do setor. Além disso, somos representantes oficiais da <strong>GUARNITEX</strong>,
                                especialista em papéis para juntas, vedação e filtros (combustível e óleo), oferecendo uma linha
                                completa para a indústria.
                            </p>
                        </div>
                    </motion.div>
                </section>

                <section className={styles.values}>
                    <h2 className={styles.sectionTitle}>Missão, Visão e Valores</h2>
                    <div className={styles.valuesGrid}>
                        <motion.div
                            className={styles.valueCard}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3>Missão</h3>
                            <p>Oferecer produtos de alta qualidade com preços competitivos, garantindo praticidade, agilidade e excelência no atendimento aos nossos clientes.</p>
                        </motion.div>

                        <motion.div
                            className={styles.valueCard}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3>Visão</h3>
                            <p>Ser reconhecida nacionalmente como líder no fornecimento de equipamentos industriais e papéis especiais, inovando constantemente em nossos processos.</p>
                        </motion.div>

                        <motion.div
                            className={styles.valueCard}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3>Valores</h3>
                            <ul className={styles.list}>
                                <li>Qualidade e Ética</li>
                                <li>Transparência</li>
                                <li>Comprometimento</li>
                                <li>Inovação</li>
                                <li>Sustentabilidade</li>
                            </ul>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
