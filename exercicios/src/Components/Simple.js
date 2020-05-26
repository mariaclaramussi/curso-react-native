import React from 'react';
import { Text } from "react-native";

//COMPONENTE BASEADO EM FUNÇÃO
// export default function(props) {
//     return <Text>{props.text}</Text>
// }

//ARROW FUNCTION; sEM CORPO DE TEXTO NAO PRECISA DE RETURN
export default (props) => <Text>Arrow: {props.text}</Text>