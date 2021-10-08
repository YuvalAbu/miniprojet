<?php

namespace App\Controller;

use App\Form\SurveyType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'home')]
    public function index(
        Request $request
    ): Response {
        $surveyForm = $this->createForm(SurveyType::class);

        if ($surveyForm->handleRequest($request)->isSubmitted() && $surveyForm->isValid()) {
            dd($surveyForm);
        }

        return $this->render('home/index.html.twig', [
            'surveyForm' => $surveyForm->createView()
        ]);
    }
}
