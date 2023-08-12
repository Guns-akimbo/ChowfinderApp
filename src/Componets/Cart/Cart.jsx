import './Cart.css'
import React, { useState } from 'react';



function Cart() {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
      setIsChecked(prevState => !prevState);
    };

    return (
        <div className='Cart'>
            <h4>Your Order</h4>
            <section className='Cart-wrapper'>
                <div className='Cart-items'>
                    <div className='Cart-itemswrapper'>
                        <article className='Cart-itemHeader'>
                            <div className='Cart-itemHeaderdesc'>Description</div>
                            <div className='Cart-itemHeaderquantity'>Quantity</div>
                            <div className='Cart-itemHeaderprice'>Item-Price</div>
                            <div className='Cart-itemHeadertotalprice'>Sub-Total Price</div>
                            <div className='Cart-itemHeaderremove'>Remove</div>
                        </article>
                        <article className='Cart-itemHolder'>
                            <div className='Cart-itemHoldereach'>
                                <div className='Cart-itemHeaderdesc'>
                                    <main className='descimage'>
                                        <img src="./src/assets/amaa.jpg" alt="amaa" />
                                    </main>
                                    <main className='itemdescrition'>Savor soul-soothing soups, rich flavors, and inviting ambiance at Warmth & Flavor.</main>
                                </div>
                                <div className='Cart-itemHeaderquantity'>
                                    <div className='increase'>+</div>
                                    <div className='itemnumber'>54</div>
                                    <div className='decrease'>-</div>
                                </div>
                                <div className='Cart-itemHeaderprice'>#5678</div>
                                <div className='Cart-itemHeadertotalprice'>#5678</div>
                                <div className='Cart-itemHeaderremove'>
                                    <div className='remove-item'>X</div>
                                </div>
                            </div>
                            <hr />

                            <div className='Cart-itemHoldereach'>
                                <div className='Cart-itemHeaderdesc'>
                                    <main className='descimage'>
                                        <img src="./src/assets/amaa.jpg" alt="amaa" />
                                    </main>
                                    <main className='itemdescrition'>Savor soul-soothing soups, rich flavors, and inviting ambiance at Warmth & Flavor.</main>
                                </div>
                                <div className='Cart-itemHeaderquantity'>
                                    <div className='increase'>+</div>
                                    <div className='itemnumber'>54</div>
                                    <div className='decrease'>-</div>
                                </div>
                                <div className='Cart-itemHeaderprice'>#5678</div>
                                <div className='Cart-itemHeadertotalprice'>#5678</div>
                                <div className='Cart-itemHeaderremove'>
                                    <div className='remove-item'>X</div>
                                </div>
                            </div>
                            <hr /><div className='Cart-itemHoldereach'>
                                <div className='Cart-itemHeaderdesc'>
                                    <main className='descimage'>
                                        <img src="./src/assets/amaa.jpg" alt="amaa" />
                                    </main>
                                    <main className='itemdescrition'>Savor soul-soothing soups, rich flavors, and inviting ambiance at Warmth & Flavor.</main>
                                </div>
                                <div className='Cart-itemHeaderquantity'>
                                    <div className='increase'>+</div>
                                    <div className='itemnumber'>54</div>
                                    <div className='decrease'>-</div>
                                </div>
                                <div className='Cart-itemHeaderprice'>#5678</div>
                                <div className='Cart-itemHeadertotalprice'>#5678</div>
                                <div className='Cart-itemHeaderremove'>
                                    <div className='remove-item'>X</div>
                                </div>
                            </div>
                            <hr /><div className='Cart-itemHoldereach'>
                                <div className='Cart-itemHeaderdesc'>
                                    <main className='descimage'>
                                        <img src="./src/assets/amaa.jpg" alt="amaa" />
                                    </main>
                                    <main className='itemdescrition'>Savor soul-soothing soups, rich flavors, and inviting ambiance at Warmth & Flavor.</main>
                                </div>
                                <div className='Cart-itemHeaderquantity'>
                                    <div className='increase'>+</div>
                                    <div className='itemnumber'>54</div>
                                    <div className='decrease'>-</div>
                                </div>
                                <div className='Cart-itemHeaderprice'>#5678</div>
                                <div className='Cart-itemHeadertotalprice'>#5678</div>
                                <div className='Cart-itemHeaderremove'>
                                    <div className='remove-item'>X</div>
                                </div>
                            </div>
                            <hr />
                        </article>


                    </div>
                </div>
                <div className='Cart-detailaction'>
                    <main className='Cart-detailactionholder'>
                        <div className='rewardshow'><p className='blur'>Total: </p><p>#98750</p></div>
                        <div className='toataprice'><p className='blur'>Cashback:</p><p > #98750</p></div>
                        <div ><p>Use cashback?</p>
                            <label className={`toggle-container ${isChecked ? 'checked' : ''}`}>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleToggle}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </main>
                    <main className='finallyo'>
                        <main className='finallyo-header'>Enter delivery Address:</main>
                        <main className='finallyo-container'>
                            <div className='addressholder'><input type="text" /></div>
                            <div className='paynow'>Order Now</div>
                        </main>
                    </main>
                </div>
            </section>
        </div>
    )
}

export default Cart