import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetContRequest } from "../redux-saga/Action/ContAction";
import LandingPage from "../component/layout/LandingPage";
import styles from '../component/pages/njs.module.scss';

export default function nodejs(){
    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(false)
    const { content } = useSelector(state => state.contStated)
    useEffect(() => {
        dispatch(GetContRequest()) 
    }, [])

    return <div>
        <LandingPage>
            <div className="flex justify-center">
                <form action="/action_page.php">
                    <input type="search" className="w-fit-content px-3 py-1.5 text-base font-normal text-gray-700 bg-   ite bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="Search" aria-label="Search" aria-describedby="button-addon2"></input>
                    <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </form>
            </div>
            <div className="bg-item">
                <h1 className={styles.nodejsTitle}>NodesJS Full Stack</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada leo tincidunt mi consectetur, vitae scelerisque purus pretium. Mauris urna mauris, efficitur eu nunc at, auctor fringilla diam. Fusce id ultrices lacus. Vestibulum non erat vitae orci mollis ullamcorper. In iaculis dui sit amet odio varius, eu tincidunt leo tristique. Curabitur vulputate dapibus dolor, sit amet imperdiet justo rutrum sit amet. Nunc accumsan molestie tempus.</p>
            </div>
            <div className="nodejsRight">
                <iframe width="300" height="315" src="https://www.youtube.com/embed/sSLJx5t4OJ4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <button className="button button3">Apply Regular Bootcamo</button>
                <h1 className={styles.nodejsTitle}>Persyaratan : </h1>
                <div className="">
                    <p>Usia Maksimal 26 tahun</p>
                    <p>Pendidikan SMK RPL/D3/</p>
                    <p>S1 Teknik Informatika/Sistem Informasi</p>
                    <p>Memiliki passion dibidang pemrograman</p>
                    <p>Pengalaman bidang RDBMS & SQL</p>
                    <p>Mampu bekerjasama dalam team</p>
                </div>
                <h1 className={styles.nodejsTitle}>Benefit</h1>
                <div className="">
                    <p>Disediakan Laptop</p>
                    <p>Makan Gratis 3x Sehari</p>
                    <p>Sertifikat</p>
                    <p>Berkesempatan terlibat dalam project</p>
                </div>
            </div>
            <div className="nodejsAs">
                <h1 className={styles.nodejsTitle}>Who you learn</h1>
                {
                    content && content.map(cont => (
                        <tr key={cont.contId}>
                            <li>{cont.contTitle}</li>
                        </tr>
                    ))
                }
            </div>
            <div className="nodejsAs">
                <h1 className={styles.nodejsTitle}>Bootcamp Material</h1>  
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Day01<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                    </ul>
                </div>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Day02<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                    </ul>
                </div>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Day03<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h1 className={styles.nodejsTitle}>Description</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada leo tincidunt mi consectetur, vitae scelerisque purus pretium. Mauris urna mauris, efficitur eu nunc at, auctor fringilla diam. Fusce id ultrices lacus. Vestibulum non erat vitae orci mollis ullamcorper. In iaculis dui sit amet odio varius, eu tincidunt leo tristique. Curabitur vulputate dapibus dolor, sit amet imperdiet justo rutrum sit amet. Nunc accumsan molestie tempus.</p>
            </div>
            <div className="nodejsAs">
                <h1 className={styles.nodejsTitle}>Instructors</h1>
                <div className="flex items-center mb-4 space-x-4">
                    <img className="w-10 h-10 rounded-full" src="" alt=""></img>
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>Kang Dian</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className={styles.nodejsTitle}>Review</h1>          
                <article>
                    <div className="flex items-center mb-4 space-x-4">
                        <img className="w-10 h-10 rounded-full" src="" alt=""></img>
                        <div className="space-y-1 font-medium dark:text-white">
                            <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                        </div>
                    </div>
                    <div className="flex items-center mb-1">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                    </div>
                    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                    <div className="flex items-center mb-4 space-x-4">
                        <img className="w-10 h-10 rounded-full" src="" alt=""></img>
                        <div className="space-y-1 font-medium dark:text-white">
                            <p>Roger Sumatra <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                        </div>
                    </div>
                    <div className="flex items-center mb-1">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-white-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Jika kau bertemu aku begini !!!</h3>
                    </div>
                    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the Indonesia on <time dateTime="2022-11-12 19:00">November 12, 2022</time></p></footer>
                </article>
            </div>
        </LandingPage>
    </div>
}