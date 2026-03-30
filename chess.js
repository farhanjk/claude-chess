// ── Piece SVGs ──────────────────────────────────────────────────────────────
const PIECE_SVG = {
    K: { // White King
        w: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#fff"/><path d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0"/></g></svg>`,
        b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#000"/><path d="M20 8h5" stroke-linejoin="miter"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#fff"/></g></svg>`
    },
    Q: {
        w: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15L14 11v14L7 14l2 12z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/></g></svg>`,
        b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#000" stroke="none"><circle cx="6" cy="12" r="2.75"/><circle cx="14" cy="9" r="2.75"/><circle cx="22.5" cy="8" r="2.75"/><circle cx="31" cy="9" r="2.75"/><circle cx="39" cy="12" r="2.75"/></g><path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z" fill="#000" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" fill="#000" stroke-linecap="butt"/><path d="M11 38.5a35 35 1 0 0 23 0" fill="none" stroke-linecap="butt"/><path d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0" fill="none" stroke="#fff"/></g></svg>`
    },
    R: {
        w: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt"/><path d="M34 14l-3 3H14l-3-3"/><path d="M15 17v7h15v-7" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt"/><path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="miter"/></g></svg>`,
        b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z" stroke-linecap="butt" fill="#000"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter" fill="#000"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt" fill="#000"/><path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="miter"/></g></svg>`
    },
    B: {
        w: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter"/></g></svg>`,
        b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#fff" stroke-linejoin="miter"/></g></svg>`
    },
    N: {
        w: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" fill="#fff"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#000"/></g></svg>`,
        b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#000"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" fill="#000"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#fff" stroke="#fff"/></g></svg>`
    },
    P: {
        w: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03C15.41 27.09 11 31.58 11 39.5H34c0-7.92-4.41-12.41-7.41-13.47C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03C15.41 27.09 11 31.58 11 39.5H34c0-7.92-4.41-12.41-7.41-13.47C28.06 24.84 29 23.03 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`
    }
};

// Unicode for captured display
const PIECE_UNICODE = {
    K: { w: '♔', b: '♚' }, Q: { w: '♕', b: '♛' }, R: { w: '♖', b: '♜' },
    B: { w: '♗', b: '♝' }, N: { w: '♘', b: '♞' }, P: { w: '♙', b: '♟' }
};

const PIECE_VALUE = { P: 1, N: 3, B: 3, R: 5, Q: 9, K: 0 };

// ── Game State ──────────────────────────────────────────────────────────────
let board = [];       // board[row][col] = { type, color } or null
let turn = 'w';       // 'w' or 'b'
let selected = null;  // { row, col }
let legalMoves = [];  // [{ row, col }] for selected piece
let lastMove = null;  // { from: {row,col}, to: {row,col} }
let capturedWhite = []; // pieces captured BY white (black pieces)
let capturedBlack = []; // pieces captured BY black (white pieces)
let gameOver = false;
let enPassantTarget = null; // { row, col } or null
let castlingRights = { w: { king: true, queen: true }, b: { king: true, queen: true } };
let moveHistory = [];
let promotionCallback = null;

// ── Initialize ──────────────────────────────────────────────────────────────
function initBoard() {
    const backRank = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
    board = Array.from({ length: 8 }, () => Array(8).fill(null));

    for (let c = 0; c < 8; c++) {
        board[0][c] = { type: backRank[c], color: 'b' };
        board[1][c] = { type: 'P', color: 'b' };
        board[6][c] = { type: 'P', color: 'w' };
        board[7][c] = { type: backRank[c], color: 'w' };
    }

    turn = 'w';
    selected = null;
    legalMoves = [];
    lastMove = null;
    capturedWhite = [];
    capturedBlack = [];
    gameOver = false;
    enPassantTarget = null;
    castlingRights = { w: { king: true, queen: true }, b: { king: true, queen: true } };
    moveHistory = [];
    promotionCallback = null;
    const existingModal = document.getElementById('promotion-modal');
    if (existingModal) existingModal.remove();
    document.getElementById('message').textContent = '';
}

// ── Rendering ───────────────────────────────────────────────────────────────
function renderBoard() {
    const boardEl = document.getElementById('board');
    boardEl.innerHTML = '';

    const kingPos = findKing(turn);
    const inCheck = isInCheck(turn);

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const sq = document.createElement('div');
            const isLight = (r + c) % 2 === 0;
            sq.className = `square ${isLight ? 'light' : 'dark'}`;
            sq.dataset.row = r;
            sq.dataset.col = c;

            // Last move highlight
            if (lastMove) {
                if ((lastMove.from.row === r && lastMove.from.col === c) ||
                    (lastMove.to.row === r && lastMove.to.col === c)) {
                    sq.classList.add('last-move');
                }
            }

            // Selected highlight
            if (selected && selected.row === r && selected.col === c) {
                sq.classList.add('selected');
            }

            // Check highlight
            if (inCheck && kingPos && kingPos.row === r && kingPos.col === c) {
                sq.classList.add('in-check');
            }

            // Legal move indicators
            const isLegalTarget = legalMoves.some(m => m.row === r && m.col === c);
            if (isLegalTarget) {
                if (board[r][c]) {
                    sq.classList.add('can-capture');
                } else if (enPassantTarget && r === enPassantTarget.row && c === enPassantTarget.col &&
                           selected && board[selected.row][selected.col]?.type === 'P') {
                    sq.classList.add('can-capture');
                } else {
                    sq.classList.add('can-move');
                }
            }

            // Coordinate labels
            if (c === 0) {
                const rank = document.createElement('span');
                rank.className = 'coord-rank';
                rank.textContent = 8 - r;
                sq.appendChild(rank);
            }
            if (r === 7) {
                const file = document.createElement('span');
                file.className = 'coord-file';
                file.textContent = 'abcdefgh'[c];
                sq.appendChild(file);
            }

            // Piece
            if (board[r][c]) {
                const piece = document.createElement('div');
                piece.className = 'piece';
                piece.innerHTML = PIECE_SVG[board[r][c].type][board[r][c].color];
                sq.appendChild(piece);
            }

            sq.addEventListener('click', () => handleClick(r, c));
            boardEl.appendChild(sq);
        }
    }

    renderStatus();
    renderCaptured();
}

function renderStatus() {
    const whiteInfo = document.getElementById('player-white');
    const blackInfo = document.getElementById('player-black');
    whiteInfo.classList.toggle('active', turn === 'w' && !gameOver);
    blackInfo.classList.toggle('active', turn === 'b' && !gameOver);
}

function renderCaptured() {
    const whiteRow = document.getElementById('captured-by-white');
    const blackRow = document.getElementById('captured-by-black');
    whiteRow.innerHTML = '';
    blackRow.innerHTML = '';

    const sortFn = (a, b) => PIECE_VALUE[a.type] - PIECE_VALUE[b.type];

    capturedWhite.sort(sortFn).forEach(p => {
        const span = document.createElement('span');
        span.className = 'captured-piece';
        span.textContent = PIECE_UNICODE[p.type][p.color];
        whiteRow.appendChild(span);
    });

    capturedBlack.sort(sortFn).forEach(p => {
        const span = document.createElement('span');
        span.className = 'captured-piece';
        span.textContent = PIECE_UNICODE[p.type][p.color];
        blackRow.appendChild(span);
    });
}

// ── Click Handling ──────────────────────────────────────────────────────────
function handleClick(row, col) {
    if (gameOver || promotionCallback) return;

    const piece = board[row][col];

    // If a piece is selected and this is a legal move target
    if (selected) {
        const isLegal = legalMoves.some(m => m.row === row && m.col === col);
        if (isLegal) {
            makeMove(selected.row, selected.col, row, col);
            return;
        }
    }

    // Toggle selection or select a new piece of current turn
    if (piece && piece.color === turn) {
        if (selected && selected.row === row && selected.col === col) {
            selected = null;
            legalMoves = [];
        } else {
            selected = { row, col };
            legalMoves = getLegalMoves(row, col);
        }
        renderBoard();
        return;
    }

    // Deselect
    selected = null;
    legalMoves = [];
    renderBoard();
}

// ── Move Execution ──────────────────────────────────────────────────────────
function makeMove(fromR, fromC, toR, toC) {
    const piece = board[fromR][fromC];

    // Check for pawn promotion
    if (piece.type === 'P' && (toR === 0 || toR === 7)) {
        showPromotionDialog(piece.color, (chosenType) => {
            executeMove(fromR, fromC, toR, toC, chosenType);
        });
        return;
    }

    executeMove(fromR, fromC, toR, toC, null);
}

function executeMove(fromR, fromC, toR, toC, promotionType) {
    const piece = board[fromR][fromC];
    const captured = board[toR][toC];

    // Record for undo (not implementing undo, but track for en passant etc.)
    const moveRecord = {
        from: { row: fromR, col: fromC },
        to: { row: toR, col: toC },
        piece: { ...piece },
        captured: captured ? { ...captured } : null,
        enPassantTarget: enPassantTarget ? { ...enPassantTarget } : null,
        castlingRights: JSON.parse(JSON.stringify(castlingRights)),
        promotion: promotionType
    };

    // Handle capture
    if (captured) {
        if (turn === 'w') capturedWhite.push(captured);
        else capturedBlack.push(captured);
    }

    // En passant capture
    if (piece.type === 'P' && enPassantTarget &&
        toR === enPassantTarget.row && toC === enPassantTarget.col) {
        const epRow = piece.color === 'w' ? toR + 1 : toR - 1;
        const epPiece = board[epRow][toC];
        if (epPiece) {
            if (turn === 'w') capturedWhite.push(epPiece);
            else capturedBlack.push(epPiece);
        }
        board[epRow][toC] = null;
    }

    // Castling
    if (piece.type === 'K' && Math.abs(toC - fromC) === 2) {
        if (toC > fromC) {
            // Kingside
            board[fromR][5] = board[fromR][7];
            board[fromR][7] = null;
        } else {
            // Queenside
            board[fromR][3] = board[fromR][0];
            board[fromR][0] = null;
        }
    }

    // Move piece
    board[toR][toC] = piece;
    board[fromR][fromC] = null;

    // Promotion
    if (promotionType) {
        board[toR][toC] = { type: promotionType, color: piece.color };
    }

    // Update en passant target
    if (piece.type === 'P' && Math.abs(toR - fromR) === 2) {
        enPassantTarget = { row: (fromR + toR) / 2, col: fromC };
    } else {
        enPassantTarget = null;
    }

    // Update castling rights
    if (piece.type === 'K') {
        castlingRights[piece.color].king = false;
        castlingRights[piece.color].queen = false;
    }
    if (piece.type === 'R') {
        if (fromC === 0) castlingRights[piece.color].queen = false;
        if (fromC === 7) castlingRights[piece.color].king = false;
    }
    // If a rook is captured
    if (captured && captured.type === 'R') {
        const capturedColor = captured.color;
        if (toC === 0 && (toR === 0 || toR === 7)) castlingRights[capturedColor].queen = false;
        if (toC === 7 && (toR === 0 || toR === 7)) castlingRights[capturedColor].king = false;
    }

    lastMove = { from: { row: fromR, col: fromC }, to: { row: toR, col: toC } };
    moveHistory.push(moveRecord);

    // Switch turn
    turn = turn === 'w' ? 'b' : 'w';
    selected = null;
    legalMoves = [];

    // Check game state
    checkGameState();
    renderBoard();
}

// ── Promotion Dialog ────────────────────────────────────────────────────────
function showPromotionDialog(color, callback) {
    promotionCallback = callback;
    const modal = document.createElement('div');
    modal.id = 'promotion-modal';

    const choices = document.createElement('div');
    choices.className = 'promotion-choices';

    ['Q', 'R', 'B', 'N'].forEach(type => {
        const btn = document.createElement('div');
        btn.className = 'promotion-choice';
        btn.innerHTML = PIECE_SVG[type][color];
        btn.addEventListener('click', () => {
            modal.remove();
            const cb = promotionCallback;
            promotionCallback = null;
            cb(type);
        });
        choices.appendChild(btn);
    });

    modal.appendChild(choices);
    document.body.appendChild(modal);
}

// ── Game State Check ────────────────────────────────────────────────────────
function checkGameState() {
    const hasLegal = hasAnyLegalMoves(turn);
    const inCheck = isInCheck(turn);
    const msgEl = document.getElementById('message');

    if (!hasLegal) {
        gameOver = true;
        if (inCheck) {
            const winner = turn === 'w' ? 'Black' : 'White';
            msgEl.textContent = `Checkmate! ${winner} wins.`;
        } else {
            msgEl.textContent = 'Stalemate! Draw.';
        }
    } else if (inCheck) {
        msgEl.textContent = 'Check!';
    } else if (isInsufficientMaterial()) {
        gameOver = true;
        msgEl.textContent = 'Draw — insufficient material.';
    } else {
        msgEl.textContent = '';
    }
}

// ── Move Generation ─────────────────────────────────────────────────────────
function getLegalMoves(row, col) {
    const piece = board[row][col];
    if (!piece) return [];

    const pseudoMoves = getPseudoLegalMoves(row, col);
    // Filter out moves that leave king in check
    return pseudoMoves.filter(move => {
        return !wouldBeInCheck(piece.color, row, col, move.row, move.col);
    });
}

function getPseudoLegalMoves(row, col) {
    const piece = board[row][col];
    if (!piece) return [];

    switch (piece.type) {
        case 'P': return getPawnMoves(row, col, piece.color);
        case 'R': return getSlidingMoves(row, col, piece.color, [[0,1],[0,-1],[1,0],[-1,0]]);
        case 'B': return getSlidingMoves(row, col, piece.color, [[1,1],[1,-1],[-1,1],[-1,-1]]);
        case 'Q': return getSlidingMoves(row, col, piece.color, [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]);
        case 'N': return getKnightMoves(row, col, piece.color);
        case 'K': return getKingMoves(row, col, piece.color);
        default: return [];
    }
}

function getPawnMoves(row, col, color) {
    const moves = [];
    const dir = color === 'w' ? -1 : 1;
    const startRow = color === 'w' ? 6 : 1;

    // Forward
    if (inBounds(row + dir, col) && !board[row + dir][col]) {
        moves.push({ row: row + dir, col });
        // Double move
        if (row === startRow && !board[row + 2 * dir][col]) {
            moves.push({ row: row + 2 * dir, col });
        }
    }

    // Captures
    for (const dc of [-1, 1]) {
        const nr = row + dir, nc = col + dc;
        if (inBounds(nr, nc)) {
            if (board[nr][nc] && board[nr][nc].color !== color) {
                moves.push({ row: nr, col: nc });
            }
            // En passant
            if (enPassantTarget && enPassantTarget.row === nr && enPassantTarget.col === nc) {
                moves.push({ row: nr, col: nc });
            }
        }
    }

    return moves;
}

function getSlidingMoves(row, col, color, directions) {
    const moves = [];
    for (const [dr, dc] of directions) {
        let r = row + dr, c = col + dc;
        while (inBounds(r, c)) {
            if (board[r][c]) {
                if (board[r][c].color !== color) moves.push({ row: r, col: c });
                break;
            }
            moves.push({ row: r, col: c });
            r += dr;
            c += dc;
        }
    }
    return moves;
}

function getKnightMoves(row, col, color) {
    const moves = [];
    const offsets = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for (const [dr, dc] of offsets) {
        const r = row + dr, c = col + dc;
        if (inBounds(r, c) && (!board[r][c] || board[r][c].color !== color)) {
            moves.push({ row: r, col: c });
        }
    }
    return moves;
}

function getKingMoves(row, col, color) {
    const moves = [];
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const r = row + dr, c = col + dc;
            if (inBounds(r, c) && (!board[r][c] || board[r][c].color !== color)) {
                moves.push({ row: r, col: c });
            }
        }
    }

    // Castling
    if (!isSquareAttacked(row, col, color)) {
        // Kingside
        if (castlingRights[color].king &&
            !board[row][5] && !board[row][6] &&
            board[row][7] && board[row][7].type === 'R' && board[row][7].color === color &&
            !isSquareAttacked(row, 5, color) && !isSquareAttacked(row, 6, color)) {
            moves.push({ row, col: 6 });
        }
        // Queenside
        if (castlingRights[color].queen &&
            !board[row][3] && !board[row][2] && !board[row][1] &&
            board[row][0] && board[row][0].type === 'R' && board[row][0].color === color &&
            !isSquareAttacked(row, 3, color) && !isSquareAttacked(row, 2, color)) {
            moves.push({ row, col: 2 });
        }
    }

    return moves;
}

// ── Check Detection ─────────────────────────────────────────────────────────
function findKing(color) {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c] && board[r][c].type === 'K' && board[r][c].color === color) {
                return { row: r, col: c };
            }
        }
    }
    return null;
}

function isInCheck(color) {
    const king = findKing(color);
    if (!king) return false;
    return isSquareAttacked(king.row, king.col, color);
}

function isSquareAttacked(row, col, defenderColor) {
    const attackerColor = defenderColor === 'w' ? 'b' : 'w';

    // Check from pawns
    const pawnDir = defenderColor === 'w' ? -1 : 1;
    for (const dc of [-1, 1]) {
        const pr = row + pawnDir, pc = col + dc;
        if (inBounds(pr, pc) && board[pr][pc] &&
            board[pr][pc].color === attackerColor && board[pr][pc].type === 'P') {
            return true;
        }
    }

    // Check from knights
    const knightOffsets = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for (const [dr, dc] of knightOffsets) {
        const r = row + dr, c = col + dc;
        if (inBounds(r, c) && board[r][c] &&
            board[r][c].color === attackerColor && board[r][c].type === 'N') {
            return true;
        }
    }

    // Check from sliding pieces (rook/queen on ranks/files, bishop/queen on diagonals)
    const rookDirs = [[0,1],[0,-1],[1,0],[-1,0]];
    for (const [dr, dc] of rookDirs) {
        let r = row + dr, c = col + dc;
        while (inBounds(r, c)) {
            if (board[r][c]) {
                if (board[r][c].color === attackerColor &&
                    (board[r][c].type === 'R' || board[r][c].type === 'Q')) {
                    return true;
                }
                break;
            }
            r += dr; c += dc;
        }
    }

    const bishopDirs = [[1,1],[1,-1],[-1,1],[-1,-1]];
    for (const [dr, dc] of bishopDirs) {
        let r = row + dr, c = col + dc;
        while (inBounds(r, c)) {
            if (board[r][c]) {
                if (board[r][c].color === attackerColor &&
                    (board[r][c].type === 'B' || board[r][c].type === 'Q')) {
                    return true;
                }
                break;
            }
            r += dr; c += dc;
        }
    }

    // Check from king
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const r = row + dr, c = col + dc;
            if (inBounds(r, c) && board[r][c] &&
                board[r][c].color === attackerColor && board[r][c].type === 'K') {
                return true;
            }
        }
    }

    return false;
}

function wouldBeInCheck(color, fromR, fromC, toR, toC) {
    // Simulate the move
    const savedFrom = board[fromR][fromC];
    const savedTo = board[toR][toC];
    const savedEnPassant = enPassantTarget;

    board[toR][toC] = savedFrom;
    board[fromR][fromC] = null;

    // Handle en passant capture in simulation
    let epCaptured = null;
    if (savedFrom.type === 'P' && enPassantTarget &&
        toR === enPassantTarget.row && toC === enPassantTarget.col) {
        const epRow = color === 'w' ? toR + 1 : toR - 1;
        epCaptured = board[epRow][toC];
        board[epRow][toC] = null;
    }

    const inCheck = isInCheck(color);

    // Undo
    board[fromR][fromC] = savedFrom;
    board[toR][toC] = savedTo;
    if (epCaptured !== null) {
        const epRow = color === 'w' ? toR + 1 : toR - 1;
        board[epRow][toC] = epCaptured;
    }

    return inCheck;
}

function hasAnyLegalMoves(color) {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c] && board[r][c].color === color) {
                if (getLegalMoves(r, c).length > 0) return true;
            }
        }
    }
    return false;
}

function isInsufficientMaterial() {
    const pieces = [];
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c]) {
                pieces.push({ ...board[r][c], row: r, col: c });
            }
        }
    }

    // King vs King
    if (pieces.length === 2) return true;

    // King + minor piece vs King
    if (pieces.length === 3) {
        const nonKings = pieces.filter(p => p.type !== 'K');
        if (nonKings.length === 1 && (nonKings[0].type === 'B' || nonKings[0].type === 'N')) {
            return true;
        }
    }

    // King + Bishop vs King + Bishop (same colored bishops)
    if (pieces.length === 4) {
        const bishops = pieces.filter(p => p.type === 'B');
        if (bishops.length === 2 && bishops[0].color !== bishops[1].color) {
            const color1 = (bishops[0].row + bishops[0].col) % 2;
            const color2 = (bishops[1].row + bishops[1].col) % 2;
            if (color1 === color2) return true;
        }
    }

    return false;
}

// ── Utility ─────────────────────────────────────────────────────────────────
function inBounds(r, c) {
    return r >= 0 && r < 8 && c >= 0 && c < 8;
}

// ── New Game ────────────────────────────────────────────────────────────────
document.getElementById('new-game-btn').addEventListener('click', () => {
    initBoard();
    renderBoard();
});

// ── Start ───────────────────────────────────────────────────────────────────
initBoard();
renderBoard();
