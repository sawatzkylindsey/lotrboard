function cell_roads(cell) {
    if ((cell.x >= 3 && cell.x <= 5 && cell.y == 22) ||
        (cell.x >= 5 && cell.x <= 7 && cell.y == 18) ||
        (cell.x == 10 && cell.y == 6) ||
        (cell.x >= 12 && cell.x <= 13 && cell.y == 6) ||
        (cell.x == 17 && cell.y == 4) ||
        (cell.x >= 20 && cell.x <= 21 && cell.y == 6)) {
        return [[FACE_W, FACE_E]];
    }
    else if ((cell.x == 2 && cell.y >= 20 && cell.y <= 21) ||
        (cell.x == 8 && cell.y == 19) ||
        (cell.x == 10 && cell.y >= 19 && cell.y <= 20) ||
        (cell.x == 11 && cell.y >= 22 && cell.y <= 23) ||
        (cell.x == 9 && cell.y == 5) ||
        (cell.x == 11 && cell.y == 7) ||
        (cell.x == 22 && cell.y >= 7 && cell.y <= 8)) {
        return [[FACE_NW, FACE_SE]];
    }
    else if ((cell.x == 7 && cell.y == 21) ||
        (cell.x == 9 && cell.y == 19) ||
        (cell.x + cell.y == 27 && cell.x >= 11 && cell.x <= 13) ||
        (cell.x + cell.y == 36 && cell.x >= 16 && cell.x <= 22) ||
        (cell.x == 7 && cell.y == 13) ||
        (cell.x + cell.y == 19 && cell.x >= 9 && cell.x <= 10) ||
        (cell.x == 12 && cell.y == 5)) {
        return [[FACE_SW, FACE_NE]];
    }
    else if ((cell.x == 2 && cell.y == 22) ||
        (cell.x == 4 && cell.y == 18) ||
        (cell.x == 10 && cell.y == 21) ||
        (cell.x == 11 && cell.y == 24) ||
        (cell.x == 20 && cell.y == 13) ||
        (cell.x == 19 && cell.y == 6) ||
        (cell.x == 18 && cell.y == 5) ||
        (cell.x == 9 && cell.y == 6)) {
        return [[FACE_NW, FACE_E]];
    }
    else if ((cell.x == 6 && cell.y == 22) ||
        (cell.x == 15 && cell.y == 21) ||
        (cell.x == 21 && cell.y == 13) ||
        (cell.x == 23 && cell.y == 10) ||
        (cell.x == 14 && cell.y == 6)) {
        return [[FACE_W, FACE_NE]];
    }
    else if ((cell.x == 8 && cell.y == 18) ||
        (cell.x == 11 && cell.y == 21) ||
        (cell.x == 23 && cell.y == 12) ||
        (cell.x == 22 && cell.y == 6) ||
        (cell.x == 19 && cell.y == 5) ||
        (cell.x == 18 && cell.y == 4)) {
        return [[FACE_W, FACE_SE]];
    }
    else if ((cell.x == 4 && cell.y == 17) ||
        (cell.x == 10 && cell.y == 17) ||
        (cell.x == 20 && cell.y == 12) ||
        (cell.x == 8 && cell.y == 11) ||
        (cell.x == 13 && cell.y == 3)) {
        return [[FACE_NE, FACE_SE]];
    }
    else if ((cell.x == 23 && cell.y == 13) ||
        (cell.x == 22 && cell.y == 9) ||
        (cell.x == 13 && cell.y == 4) ||
        (cell.x == 11 && cell.y == 8) ||
        (cell.x == 8 && cell.y == 12)) {
        return [[FACE_NW, FACE_SW]];
    }
    else if ((cell.x == 14 && cell.y == 13) ||
        (cell.x == 22 && cell.y == 12) ||
        (cell.x == 22 && cell.y == 10) ||
        (cell.x == 16 && cell.y == 4)) {
        return [[FACE_SW, FACE_E]];
    }
    else if (cell.x == 21 && cell.y == 10) {
        return [[FACE_NE, FACE_SE]];
    }
    else if ((cell.x == 2 && cell.y == 19) ||
        (cell.x == 9 && cell.y == 4) ||
        (cell.x == 15 && cell.y == 4)) {
        return [[MIDDLE, FACE_SE]];
    }
    else if ((cell.x == 5 && cell.y == 16) ||
        (cell.x == 24 && cell.y == 9) ||
        (cell.x == 14 && cell.y == 2)) {
        return [[FACE_SW, MIDDLE]];
    }
    else if ((cell.x == 15 && cell.y == 13) ||
        (cell.x == 11 && cell.y == 18) ||
        (cell.x == 12 && cell.y == 24) ||
        (cell.x == 16 && cell.y == 5)) {
        return [[FACE_W, MIDDLE]];
    }
    else if (cell.x == 14 && cell.y == 21) {
        return [[MIDDLE, FACE_E]];
    }
    else if (cell.x == 6 && cell.y == 14) {
        return [[MIDDLE, FACE_NE]];
    }
    else if ((cell.x == 8 && cell.y == 20) ||
        (cell.x == 21 && cell.y == 11)) {
        return [[FACE_SW, FACE_NW], [FACE_SW, FACE_NE]];
    }
    else if (cell.x == 10 && cell.y == 18) {
        return [[FACE_SW, FACE_E], [FACE_NW, FACE_SE]];
    }
    else if (cell.x == 15 && cell.y == 5) {
        return [[FACE_SW, FACE_NE], [FACE_NW, FACE_E]];
    }
    else if (cell.x == 11 && cell.y == 6) {
        return [[FACE_W, FACE_E], [FACE_NE, FACE_SE]];
    }

    return [];
}

function is_deadland(cell) {
    if (cell.x >= 14 && cell.x <= 19 && cell.y == 14) {
        return true;
    }

    if (cell.x >= 13 && cell.x <= 18 && cell.y == 15) {
        return true;
    }

    if (cell.x >= 13 && cell.x <= 18 && cell.y == 16) {
        return true;
    }

    if (cell.x >= 11 && cell.x <= 16 && cell.y == 17) {
        return true;
    }

    if (cell.x >= 12 && cell.x <= 15 && cell.y == 18) {
        return true;
    }

    if (cell.x >= 11 && cell.x <= 13 && cell.y == 19) {
        return true;
    }

    if (cell.x >= 11 && cell.x <= 12 && cell.y == 20) {
        return true;
    }

    return false;
}

function is_marsh(cell) {
    if (cell.x == 13 && cell.y >= 22 && cell.y <= 23) {
        return true;
    }

    if (cell.x == 14 && cell.y == 22) {
        return true;
    }

    return false;
}

function is_water(cell) {
    // left/west ocean
    if (cell.x <= 1) {
        if (cell.x == 0 && cell.y == 16) {
            return false;
        }

        return true;
    }

    if (cell.x == 2 && cell.y <= 16) {
        return true;
    }

    if (cell.x == 3 && cell.y <= 14) {
        return true;
    }

    if (cell.x == 4 && cell.y <= 12) {
        if (cell.x == 4 && cell.y == 8) {
            return false;
        }

        return true;
    }

    if (cell.x == 5 && cell.y <= 11) {
        return true;
    }

    if (cell.x == 6 && cell.y <= 8) {
        return true;
    }

    if (cell.x == 7 && cell.y <= 7) {
        return true;
    }

    if (cell.x == 8 && cell.y <= 5) {
        return true;
    }

    if (cell.x == 9 && cell.y == 3) {
        return true;
    }

    if (cell.x == 10 && cell.y <= 3) {
        return true;
    }

    if (cell.x == 11 && cell.y <= 2) {
        return true;
    }

    if (cell.x == 12 && cell.y <= 1) {
        return true;
    }

    if (cell.x <= 17 && cell.y == 0) {
        return true;
    }

    // bottom ocean
    if (cell.x <= 9 && cell.y >= 23) {
        if (cell.x == 7 && cell.y == 24) {
            return false;
        }

        return true;
    }

    if (cell.x >= 7 && cell.x <= 10 && cell.y == 22) {
        return true;
    }

    if (cell.x == 9 && cell.y == 21) {
        return true;
    }

    if (cell.x == 10 && cell.y == 23) {
        return true;
    }

    // morder lake
    if (cell.x >= 14 && cell.x <= 15 && cell.y == 19) {
        return true;
    }

    if (cell.x == 13 && cell.y == 20) {
        return true
    }

    if (cell.x == 16 && cell.y == 18) {
        return true
    }

    // the long lake
    if (cell.x == 23 && cell.y >= 5 && cell.y <= 7) {
        return true;
    }

    return false;
}
