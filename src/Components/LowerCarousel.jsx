import c from '../Assets/c.jpg';
import c1 from '../Assets/c1.jpg';
import c2 from '../Assets/c2.jpg';
import c3 from '../Assets/c3.jpg';
import c4 from '../Assets/c4.jpg';
import c5 from '../Assets/c5.jpg';
import c6 from '../Assets/c6.jpg';


const LowerCarousel = () => {
    return ( 
        <>
        <p-carousel >
        <ng-template let-product pTemplate="item">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="mb-3">
                        <img src={c} class="product-image"
                            />
                    </div>
                    <div>
                        

                    </div>
                </div>
            </div>
            
        </ng-template>
    </p-carousel>
    <p-carousel >
        <ng-template let-product pTemplate="item">
            <div class="product-item">
                <div class="product-item-content">
                    <div class="mb-3">
                        <img src={c1} class="product-image"
                            />
                    </div>
                    <div>
                        

                    </div>
                </div>
            </div>
            
        </ng-template>
    </p-carousel>
    </>
    
     );
}
 
export default LowerCarousel;




