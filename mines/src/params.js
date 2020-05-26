import {Dimensions} from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //proporcao do painel superior
    difficultLevel: 0.1, //0.2, 0.3
    qtdColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize) //arredonda pra baixo
    },
    qtdRowsAmount() {
        const height = Dimensions.get('window').height
        const totalHeight = height * (1 - this.headerRatio)
        return Math.floor(totalHeight / this.blockSize) //arredonda pra baixo
    }
}

export default params