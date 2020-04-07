/**
 * 颜色转换工具
 * @author hsuna
 */	

/**
 * 变为灰色
 * @return egret.ColorMatrixFilter
 */		
export function gray():egret.ColorMatrixFilter {
    let matrix:Array<number> = [
        0.4, 0.4, 0.4, 0, 0, 
        0.4, 0.4, 0.4, 0, 0, 
        0.4, 0.4, 0.4, 0, 0,
        0,   0,   0,   1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}
    
/**
 * 变为白色
 * @return egret.ColorMatrixFilter
 */		
export function white():egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        1, 1, 1, 0, 20, 
        1, 1, 1, 0, 20, 
        1, 1, 1, 0, 20, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为黑色
 * @return egret.ColorMatrixFilter
 */		
export function black(): egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为红色
 * @return egret.ColorMatrixFilter
 */		
export function red():egret.ColorMatrixFilter
{
    let matrix:Array<number> = [	
        1, 1, 1, 0, 20, 
        0, 0, 0, 0, 20, 
        0, 0, 0, 0, 20, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为深红色(以大红色为基础)
 * @return egret.ColorMatrixFilter
 */	
export function redDark():egret.ColorMatrixFilter
{
    let matrix:Array<number> = [	
        0.5, 0.5, 0.5, 0, 0, 
        0.2, 0.2, 0.2, 0, 0, 
        0.1, 0.1, 0.1, 0, 0,
        0,   0,   0,   1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为蓝色(以大红色为基础)
 * @return egret.ColorMatrixFilter
 */		
export function blue(): egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        0, 0, 0, 0, 20, 
        0.7, 0.7, 0.7, 0, 20, 
        1, 1, 1, 0, 20, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为深蓝色(以大红色为基础)
 * @return egret.ColorMatrixFilter
 */		
export function blueDark():egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        0,   0,   0,   0,  20, 
        0.3, 0.3, 0.3, 0,  20, 
        1,   1,   1,   0,  20, 
        0,   0,   0,   1,  0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为绿色(以大红色为基础)
 * @return egret.ColorMatrixFilter
 */		
export function green():egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        0,   0,   0,   0,  20, 
        0.7, 0.7, 0.7, 0,  20, 
        0.3, 0.3, 0.3, 0,  20, 
        0,   0,   0,   1,  0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为橙色(以大红色为基础)
 * @return egret.ColorMatrixFilter
 */		
export function orange():egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        1,   1,   1,   0, 0, 
        0.5, 0.5, 0.5, 0, 0, 
        0,   0,   0,   0, 0,
        0,   0,   0,   1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为黄色(以大红色为基础)
 * @return egret.ColorMatrixFilter
 */		
export function yellow():egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        0.9, 0.9, 0.9, 0, 20, 
        0.7, 0.7, 0.7, 0, 20, 
        0, 0, 0, 0, 20, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变为紫色(以大红色为基础)
 * @return egret.ColorMatrixFilter
 */		
export function purple():egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        1, 1, 1, 0, 20, 
        0, 0, 0, 0, 20, 
        1, 1, 1, 0, 20, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变暗
 * @return egret.ColorMatrixFilter
 */		
export function dark():egret.ColorMatrixFilter {
    let matrix:Array<number> = [	
        0.5, 0, 0, 0, 0, 
        0, 0.5, 0, 0, 0, 
        0, 0, 0.5, 0, 0, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变亮
 * @return egret.ColorMatrixFilter
 */		
export function light():egret.ColorMatrixFilter
{
    let matrix:Array<number> = [	
        1, 0, 0, 0, 100, 
        0, 1, 0, 0, 100, 
        0, 0, 1, 0, 100, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}

/**
 * 变亮
 * @return egret.ColorMatrixFilter
 */		
export function light2():egret.ColorMatrixFilter
{
    let matrix:Array<number> = [	
        1, 0, 0, 0, 25, 
        0, 1, 0, 0, 25, 
        0, 0, 1, 0, 25, 
        0, 0, 0, 1, 0
    ];
    let color:egret.ColorMatrixFilter = new egret.ColorMatrixFilter(matrix);
    return color;
}