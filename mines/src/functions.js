const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, i) => {
        return Array(columns).fill(0).map((_, j) => {
            return { //criacao manual do objeto
                row: i,
                column: j,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while(minesPlanted < minesAmount) {
        const rowSelect = parseInt(Math.random() * rows, 10) //segundo parametro e a base do resultado
        const columnSelect = parseInt(Math.random() * columns, 10)
    
        //se a posicao sorteada nao estiver minada
        if(!board[rowSelect][columnSelect].mined) {
            board[rowSelect][columnSelect].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)

    return board
}

//clona o tabuleiro para nao mexer diretamente na referencia do objeto
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row-1, row, row+1]
    const columns = [column-1, column, column+1]
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColum = c >= 0 && c < board[0].length

            if (different && validColum && validRow) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined

    //me diz se todos os vizinhos sao seguros
    return getNeighbors(board, row, column).reduce(safes, true)
}

const openField = (board, row, column) => {
    const field = board[row][column]
    if(!field.opened) {
        field.opened = true
        if(field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)){
            getNeighbors(board, row, column).forEach(n =>
                openField(board, n.row, n.column)
            )
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

const fields = board => [].concat(...board)
//confere se tem explosao para encerrar o jogo
const hasExplosion = board => fields(board).filter(f => f.exploded).length > 0
const pending = field => (field.mined && !field.flagged) || 
    (!field.mined && !field.opened)
// se todos os campos foram abertos e resolvidos
const wonGame = board => fields(board).filter(pending).length === 0
//mostra todas as minhas do jogo
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)


const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

const flagUsed = board => 
    fields(board).filter(field => field.flagged).length

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hasExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagUsed
}