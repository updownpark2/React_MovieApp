import PropTypes from "prop-types";
import styles from "./App.module.css";
function Button(props) {
  return (
    //React의 파워 중 하나이다. css를 import하지 않아도
    //각각의 버튼에 대해 다른 설정을 해줄 수 있기 때문이다.
    <button className={styles.btn}>{props.text}</button>
  ); //무작위의 랜덤 클래스를 갖는다.***
}

Button.propTypes = {
  //propTypes할때 p는 소문자로해야한다.
  text: PropTypes.string.isRequired,
}; //기본셋팅
export default Button;
