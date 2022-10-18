/* Expects (in sequence):
 * - Course
 * - Team Number
 * - Student Email
 */

const memberCSVData = 
`MIST.6010-081,Team_0,test_user1@student.uml.edu
MIST.6010-081,Team_0,test_user2@student.uml.edu
MIST.6010-081,Team_1,stephen_rose@student.uml.edu
MIST.6010-081,Team_1,oldden_fox@student.uml.edu
MIST.6010-081,Team_1,patricia_kabitzke@student.uml.edu
MIST.6010-081,Team_1,heather_granger@student.uml.edu
MIST.6010-081,Team_1,tony_tourejones@student.uml.edu
MIST.6010-081,Team_2,cristal_reyes@student.uml.edu
MIST.6010-081,Team_2,paulo_xavier@student.uml.edu
MIST.6010-081,Team_2,jingzhe_zhang@student.uml.edu
MIST.6010-081,Team_2,david_feldman@student.uml.edu
MIST.6010-081,Team_3,brady_sufat@student.uml.edu
MIST.6010-081,Team_3,evvan_erb@student.uml.edu
MIST.6010-081,Team_3,kristen_price@student.uml.edu
MIST.6010-081,Team_3,luis_horton@student.uml.edu
MIST.6010-081,Team_4,brian_fisher@student.uml.edu
MIST.6010-081,Team_4,daniel_pickett@student.uml.edu
MIST.6010-081,Team_4,taylor_brown1@student.uml.edu
MIST.6010-081,Team_4,hetal_dave@student.uml.edu
MIST.6010-081,Team_4,michelle_white@student.uml.edu
MIST.6010-081,Team_5,michael_hanscom@student.uml.edu
MIST.6010-081,Team_5,danitza_montillatejada@student.uml.edu
MIST.6010-081,Team_5,geneva_griffin@student.uml.edu
MIST.6010-081,Team_5,dalton_bodreau@student.uml.edu
MIST.6010-081,Team_5,jesse_monroymashaw@student.uml.edu
MIST.6010-081,Team_6,venkatasubramanian_ravichandran@student.uml.edu
MIST.6010-081,Team_6,maria_bilvais@student.uml.edu
MIST.6010-081,Team_6,zakariya_aslane@student.uml.edu
MIST.6010-83,Team_1,amanda_walsh1@student.uml.edu
MIST.6010-83,Team_1,aakash_sathe@student.uml.edu
MIST.6010-83,Team_1,phoebe_pham@student.uml.edu
MIST.6010-83,Team_1,tashell_black@student.uml.edu
MIST.6010-83,Team_2,kristian_lundberg@student.uml.edu
MIST.6010-83,Team_2,xiayun_zheng@student.uml.edu
MIST.6010-83,Team_2,praveen_ravichandran@student.uml.edu
MIST.6010-83,Team_2,julia_thanwan@student.uml.edu
MIST.6010-83,Team_3,neil_berube@student.uml.edu
MIST.6010-83,Team_3,samantha_beati@student.uml.edu
MIST.6010-83,Team_3,brianna_worthington@student.uml.edu
MIST.6010-83,Team_3,andrew_hanwell@student.uml.edu
MIST.6010-83,Team_3,calvin_clark@student.uml.edu
MIST.6010-83,Team_4,john_elhelou@student.uml.edu
MIST.6010-83,Team_4,lena_bouchrouche@student.uml.edu
MIST.6010-83,Team_4,lauren_brushingham@student.uml.edu
MIST.6010-83,Team_4,aakanksha_dubey@student.uml.edu
MIST.6010-83,Team_5,priscilla_acosta1@student.uml.edu
MIST.6010-83,Team_5,laura_lin@student.uml.edu
MIST.6010-83,Team_5,phyohtet_hein@student.uml.edu
MIST.6010-83,Team_5,kimberly_clark@student.uml.edu
MIST.6010-83,Team_6,brandi_smith@student.uml.edu
MIST.6010-83,Team_6,fnu_siddharth@student.uml.edu
MIST.6010-83,Team_6,mallory_beauregard@student.uml.edu
MIST.6010-83,Team_6,marvin_bautista@student.uml.edu
MIST.6010-83,Team_6,andreas_gonzales@student.uml.edu
MIST.6010-83,Team_6,osei_serebour@uml.edu`
