import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import guarnitexLogo from '../assets/images/guarnitex-logo.png';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroGrid}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={styles.heroContent}
                        >
                            <span className={styles.badge}>Bem-vindo ao Novo Site</span>
                            <h1 className={styles.title}>
                                Excelência em <span className={styles.highlight}>Equipamentos</span> e Papéis Especiais
                            </h1>
                            <p className={styles.description}>
                                Atuando no mercado de equipamentos e acessórios para postos de combustível com mais de 70 produtos em linha.
                            </p>
                            <div className={styles.actions}>
                                <Link to="/produtos" className={styles.btnPrimary}>Ver Produtos</Link>
                                <Link to="/contato" className={styles.btnSecondary}>Fale Conosco</Link>
                            </div>
                        </motion.div>

                        {/* Interactive Stats Cards */}
                        <div className={styles.heroStats}>
                            <motion.div
                                className={styles.statCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3>+15</h3>
                                <p>Anos no Mercado</p>
                            </motion.div>
                            <motion.div
                                className={styles.statCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h3>+100</h3>
                                <p>Clientes Atendidos</p>
                            </motion.div>
                            <motion.div
                                className={styles.statCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <h3>+70</h3>
                                <p>Produtos</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories Preview */}
            <section className={styles.categoriesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Nossa Linha</h2>
                        <Link to="/produtos" className={styles.linkArrow}>Ver catálogo completo →</Link>
                    </div>
                    <div className={styles.categoryGrid}>
                        {['Bicos Automáticos', 'Papel Linter', 'Papelão Filtrante', 'Réguas de Medição', 'Bombas de Drenagem', 'Valvulas Breakaway'].map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.categoryCard}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.catIconStub}></div>
                                <h4>{item}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Official Partner Section (Blue Background) */}
            <section className={`${styles.partnerSection} section`}>
                <div className="container">
                    <div className={styles.partnerGrid}>
                        <div className={styles.partnerInfo}>
                            <h3>Representante Oficial</h3>
                            <h2>Guarnitex Papéis Especiais</h2>
                            <p>Especialista em papéis para juntas, vedação e filtros. Parceria exclusiva que garante a melhor qualidade para sua indústria.</p>

                            <div className={styles.metrics}>
                                <div className={styles.metricItem}>
                                    <div className={styles.progressBar}><div style={{ width: '100%' }}></div></div>
                                    <span>Qualidade 100%</span>
                                </div>
                                <div className={styles.metricItem}>
                                    <div className={styles.progressBar}><div style={{ width: '100%' }}></div></div>
                                    <span>Atendimento 100%</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.partnerVisual}>
                            <div className={styles.partnerImageStub} style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src={guarnitexLogo}
                                    alt="Guarnitex Papéis Especiais"
                                    style={{ maxWidth: '80%', maxHeight: '80%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Request Form (Bottom) */}
            <section className={styles.budgetSection}>
                <div className="container">
                    <div className={styles.budgetBox}>
                        <div className={styles.budgetInfo}>
                            <h2>Solicite um Orçamento</h2>
                            <p>Ficou com alguma dúvida? Fale com um dos nossos especialistas agora mesmo.</p>
                            <ul className={styles.contactList}>
                                <li>(11) 3699-5659</li>
                                <li>trn.papeis@uol.com.br</li>
                            </ul>
                        </div>
                        <form className={styles.budgetForm}>
                            <input type="text" placeholder="Seu Nome" className={styles.input} />
                            <input type="email" placeholder="Seu E-mail" className={styles.input} />
                            <input type="tel" placeholder="Seu Telefone" className={styles.input} />
                            <select className={styles.select}>
                                <option>Selecione um produto de interesse</option>
                                <option>Equipamentos</option>
                                <option>Papéis Especiais</option>
                                <option>Outros</option>
                            </select>
                            <button className={styles.submitBtn}>Enviar Solicitação</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
