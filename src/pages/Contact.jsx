import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.intro}
                >
                    <h1>Fale Conosco</h1>
                    <p>Estamos prontos para atender sua empresa.</p>
                </motion.div>

                <div className={styles.contentGrid}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.infoSection}
                    >
                        <h3>Informações de Contato</h3>

                        <div className={styles.infoItem}>
                            <h4>Endereço</h4>
                            <p>Av. Sport Club Corinthians Paulista, 1802<br />Km 18 - Osasco - SP</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4>Telefones</h4>
                            <p>(11) 3699-5659</p>
                            <p>(11) 3682-1944</p>
                            <p>(11) 3682-0309</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4>Digital</h4>
                            <p>Email: trn.papeis@uol.com.br</p>
                            <p>WhatsApp: (11) 94793-3476</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.formSection}
                    >
                        <form>
                            <div className={styles.formGroup}>
                                <label>Nome</label>
                                <input type="text" className={styles.input} placeholder="Seu nome" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input type="email" className={styles.input} placeholder="seu@email.com" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Assunto</label>
                                <input type="text" className={styles.input} placeholder="Orçamento, Dúvida..." />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Mensagem</label>
                                <textarea className={styles.textarea} placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
