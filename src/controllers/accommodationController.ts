import { Request, Response } from "express";

import { AccommodationModel } from "../models";

export const getAccommodations = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  try {
    const accommodations = await AccommodationModel.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize || 0)
      .limit(pageSize || 10);

    const total = await AccommodationModel.countDocuments();

    return res.json({
      status: "success",
      pagination: {
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
        total,
      },
      data: accommodations,
    });
  } catch (error: any) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

export const getAccommodation = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const accommodation = await AccommodationModel.findById(id);

    return res.json({
      status: "success",
      data: accommodation,
    });
  } catch (error: any) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};
