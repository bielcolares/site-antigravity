import React from 'react';
import { motion } from 'framer-motion';
import styles from './MeasurementTables.module.css';

const MeasurementTables = () => {
    return (
        <div className={styles.tablesContainer}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.intro}
                >
                    <h1>Tabelas de Medição</h1>
                    <p>Consulte as especificações técnicas para tanques e equipamentos.</p>
                </motion.div>

                {/* Example Table 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.tableWrapper}
                >
                    <h3>Tanques Cilíndricos Horizontais</h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Capacidade (L)</th>
                                <th>Diâmetro (mm)</th>
                                <th>Comprimento (mm)</th>
                                <th>Espessura (mm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.000</td>
                                <td>1.910</td>
                                <td>5.500</td>
                                <td>4.75</td>
                            </tr>
                            <tr>
                                <td>20.000</td>
                                <td>2.230</td>
                                <td>5.400</td>
                                <td>6.35</td>
                            </tr>
                            <tr>
                                <td>30.000</td>
                                <td>2.550</td>
                                <td>6.000</td>
                                <td>6.35</td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>

                {/* Example Table 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={styles.tableWrapper}
                >
                    <h3>Conversão de Unidades</h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>De</th>
                                <th>Para</th>
                                <th>Fator</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Polegadas</td>
                                <td>Milímetros</td>
                                <td>x 25.4</td>
                            </tr>
                            <tr>
                                <td>Galões (EUA)</td>
                                <td>Litros</td>
                                <td>x 3.785</td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>

                <div className={styles.downloadSection}>
                    <h3>Precisa da tabela completa?</h3>
                    <p>Baixe o PDF oficial com todas as especificações detalhadas.</p>
                    <button className={styles.downloadBtn}>Baixar PDF Completo</button>
                </div>
            </div>
        </div>
    );
};

export default MeasurementTables;
