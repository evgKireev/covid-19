import style from './Footer.module.css';
function Fotter() {
  return (
    <div className={style.footer}>
      <div> © 2022 Developed by</div>
      <a className={style.footer__link} href="https://github.com/evgKireev">evgKireev</a>
    </div>
  );
}


export default Fotter