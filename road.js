var Y_SIGNS = {};
var X_SIGNS = {};


function init_signs() {
    Y_SIGNS[FACE_NW] = -1;
    Y_SIGNS[FACE_NE] = -1;
    Y_SIGNS[FACE_SW] = 1;
    Y_SIGNS[FACE_SE] = 1;
    Y_SIGNS[FACE_W] = 0;
    Y_SIGNS[FACE_E] = 0;
    Y_SIGNS[MIDDLE] = 0;
    X_SIGNS[FACE_NW] = -1;
    X_SIGNS[FACE_NE] = 1;
    X_SIGNS[FACE_SW] = -1;
    X_SIGNS[FACE_SE] = 1;
    X_SIGNS[FACE_W] = -1;
    X_SIGNS[FACE_E] = 1;
    X_SIGNS[MIDDLE] = 0;
}

function draw_road(paper, cell, joined_edges) {
    var hex_width = DELTA_X * 2;
    var hex_height = (DELTA_Y * 2) + SIDE_LENGTH;
    var damper = 10;

    for (var s = 0; s < joined_edges.length; s++) {
        var ends = end_points(cell, joined_edges[s]);
        var middle_xoff = Math.random() * (hex_width / damper);
        var middle_yoff = Math.random() * (hex_height / damper);
        var x_weight = sign_x(joined_edges[s][0], joined_edges[s][1]);
        var y_weight = sign_y(joined_edges[s][0], joined_edges[s][1]);

        if (x_weight < 0) {
            middle_xoff *= -1;
        }
        else if (x_weight == 0) {
            if (Math.random() < 0.5) {
                middle_xoff *= -1;
            }
        }

        if (y_weight < 0) {
            middle_yoff *= -1;
        }
        else if (y_weight == 0) {
            if (Math.random() < 0.5) {
                middle_yoff *= -1;
            }
        }

        var road = "M" + ends[0][0] + "," + ends[0][1];
        road += "C" + (cell.m[0] + middle_xoff) + "," + (cell.m[1] + middle_yoff);
        road += " " + (cell.m[0] + middle_xoff) + "," + (cell.m[1] + middle_yoff);
        road += " " + ends[1][0] + "," + ends[1][1];
        var p = paper.path(road);
        p.attr("stroke-width", 3);
        p.attr("stroke", COLOUR_ROAD);
        p.attr("stroke-linecap", "round");
    }
}

function sign_x(edge_a, edge_b) {
    return X_SIGNS[edge_a] + X_SIGNS[edge_b];
}

function sign_y(edge_a, edge_b) {
    return Y_SIGNS[edge_a] + Y_SIGNS[edge_b]
}

function end_points(cell, joined_edges) {
    var points = [];
    points.push(edge_point(cell, joined_edges[0]));
    points.push(edge_point(cell, joined_edges[1]));
    return points;
}

function edge_point(cell, which) {
    if (which == FACE_NW) {
        return [cell.nw[0] + (DELTA_X / 2), cell.nw[1] - (DELTA_Y / 2)];
    }
    else if (which == FACE_W) {
        return [cell.nw[0], cell.nw[1] + (SIDE_LENGTH / 2)];
    }
    else if (which == FACE_SW) {
        return [cell.sw[0] + (DELTA_X / 2), cell.sw[1] + (DELTA_Y / 2)];
    }
    else if (which == FACE_SE) {
        return [cell.s[0] + (DELTA_X / 2), cell.s[1] - (DELTA_Y / 2)];
    }
    else if (which == FACE_E) {
        return [cell.ne[0], cell.ne[1] + (SIDE_LENGTH / 2)];
    }
    else if (which == FACE_NE) {
        return [cell.n[0] + (DELTA_X / 2), cell.n[1] + (DELTA_Y / 2)];
    }
    else if (which == MIDDLE) {
        return [cell.m[0], cell.m[1]];
    }
}
